class UsersController < ApplicationController
	def new
		@user = User.new
	end

	def create
		@user = User.new(user_params)
		if @user.save
			render json: {user_id: @user.id, username: @user.username}
		else
			render json: {errors: @user.errors.to_a}
		end
	end

	def signin
		@user = User.find_by(email: signin_email_and_password_params[:email])
		if @user.authenticate(signin_email_and_password_params[:password])
			render json: {user_id: @user.id, username: @user.username}
		else
			render json: {errors: "Account log in failed."}
		end
	end

	def authenticate_user
		user = User.find(user_id_params[:id])
		if user.nil?
			render json: {note: "authentication failed"}
		else
			render json: {note: "authentication successful"}
		end
	end

	private
	def user_params
		params.permit(:username, :email, :password)
	end

	def signin_email_and_password_params
		params.permit(:email, :password)
	end

	def user_id_params
		params.permit(:id)
	end
end
