class TodosController < ApplicationController
  def index
    @todos = Todo.all
    render json: @todos
  end

  def new
    
  end

  def create
  end

  def update
  end

  def edit
  end

  def destroy
  end
end
