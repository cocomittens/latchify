class Api::PatternsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        @user = User.find_by(email: params[:user_id])
    end

    def show
        @pattern = Pattern.find(params[:id])
    end

    def new
        @pattern = Pattern.new
    end

    def create
        @pattern = Pattern.new(pattern_params)
        if @pattern.save
            render json: params
        else
            render json: @pattern.errors.full_messages, status: :unprocessable_entity
        end
    end

    def update
        @pattern = Pattern.find(params[:id])
        if @pattern.update(pattern_params)
            render json: params
        else
            render json: @pattern.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        @pattern = Pattern.find(params[:id])
        if @pattern.destroy(pattern_params)
            render json: params
        else
            render json: {errors: "Cannot delete pattern"}, status: :unprocessable_entity
        end
    end

    private
    def pattern_params
        params.require(:pattern).permit(:title, :author_id, :img, :yarn_grid)
    end
end
