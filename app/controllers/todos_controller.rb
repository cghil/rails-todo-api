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
    @todos = Todo.create(todo_params)
    render json: { alert: "New item has been created"}
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
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
    render json: { alert: "Item has been removed" }
  end

  private


    def todo_params
      params.require(:todo).permit(:description, :user_id)
    end
    def todo_update_params
      params.require(:todo).permit(:done)
    end
end
