class TodosController < ApplicationController
  def index
    @todos = Todo.all
    render json: @todos
  end

  def show
    @todo = Todo.find(params[:id])
    render json: @todo
  end

  def create
    @todo = Todo.create(todo_params)
    render json: @todo
  end

  def done
    @todo = Todo.find(params[:id])
    @todo.done = true
  end

  def edit
  end

  def not_done
    @todo = Todo.find(params[:id])
    @todo.done = false
  end

  def update
    @todo = Todo.find(params[:id])
    @todo.update(todo_params)
    @todo.save
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
    render json: { alert: "Item has been removed" }
  end

  private


    def todo_params
      params.permit(:description, :user_id, :done)
    end

    def todo_update_params
      params.permit(:done, :description, :user_id)
    end
end
