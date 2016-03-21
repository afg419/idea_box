class Api::V1::IdeasController < ApplicationController
  def index
    render json: Idea.order(created_at: :desc)
  end

  def create
    idea = Idea.new(idea_params)
    if idea.save
      render json: "created idea #{idea.title}"
    else
      render json: idea.errors.full_messages
    end
  end

  def destroy
    idea = Idea.find_by(id: params[:id])
    if idea
      idea.destroy
      render json: "deleted idea #{idea.title}"
    else
      render json: "you didn't even have that idea."
    end
  end

  def update
    idea = Idea.find_by(id: params[:id])
    if idea && idea.update_attributes(idea_params.except("quality"))
      render json: "edited idea #{idea.title}"
    else
      render json: "you didn't even have that idea."
    end
  end

  def vote
    reply = VoteService.new(params).vote
    render json: reply
  end

  private

  def idea_params
    params.require("idea").permit("title", "body", "quality")
  end
end
