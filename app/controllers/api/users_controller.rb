class Api::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
    def show
        render json: params
    end
  
    def create
        @user = User.new(user_params)
        if @user.save
            render json: @user
        else
            render json: @user.errors.full_messages, status: :not_found
        end
    end
    def new
        @user= User.new
    end
    def update
        @user = User.find(params[:id])
        if @user.update(user_params)
            render json: params
        else
            render json: @user.errors.full_messages
    end
    
    private
    def user_params
        params.require(:user).permit(:email, :password)
    end
end
