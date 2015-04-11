class UsersController < ApplicationController

  def create
  	user = User.new(user_create_params)
  	if user.save
  		render json: {message: "You have successfully created an account", user: user}
  	else
  		render json: {message: user.errors.to_a}
  	end
  end

  def show
  	user = User.find(params[:id])
  	render json: user
  end

  private

  def user_create_params
  	params.permit(:username, :password, :email)
  end
end
