class Api::V1::IdeasController < ApplicationController
  def index
    render json: Idea.order(:created_at)
  end

  def create
    idea = Idea.new(idea_params)
    if idea.save
      render json: idea
    else
      response.status = 400
      render json: idea.errors.full_messages
    end
  end

  def destroy
    idea = Idea.find_by(id: params[:id])
    if idea
      render json: idea.destroy
    else
      render json: "you didn't even have that idea."
    end
  end

  def update
    idea = Idea.find_by(id: params[:id])
    if idea && idea.update_attributes(update_params(idea))
      render json: idea
    else
      response.status = 400
      render json: idea.errors.full_messages
    end
  end

  def vote
    render json: VoteService.new(params).vote
  end

private

  def update_params(idea)
    ups = idea_params.except("quality")
    if params["title"] == idea.title
      ups = ups.except("title")
    end
    ups
  end

  def idea_params
    params.require("idea").permit("title", "body", "quality")
  end
end
