class Api::V1::IdeasController < ApplicationController
  def index
    render json: Idea.all
  end

  def create
    idea = Idea.new(idea_params)
    if idea.save
      render json: "created idea #{idea.title}"
    else
      render json: idea.errors.full_messages
    end
  end

  private

  def idea_params
    params.require("idea").permit("title", "body", "quality")
  end
end
