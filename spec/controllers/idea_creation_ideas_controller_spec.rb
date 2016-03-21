require 'rails_helper'

RSpec.describe Api::V1::IdeasController, type: :controller do
  it "creates a new idea" do
    expect(Idea.count).to eq 0
    post :create, create_idea_params(0)

    expect(response.body).to eq "created idea Title0"
    expect(response.status).to eq 200

    expect(Idea.count).to eq 1
    expect(Idea.first.title).to eq "Title0"
  end

  it "tells user it won't create an idea which fails validations" do
    create_ideas(3)
    expect(Idea.count).to eq 3

    post :create, create_idea_params(1)

    expect(Idea.count).to eq 3
    expect(response.body).to eq "[\"Title has already been taken\"]"
    expect(response.status).to eq 200

    post :create, create_idea_params(1, title: "")

    expect(Idea.count).to eq 3
    expect(response.body).to eq "[\"Title can't be blank\"]"
    expect(response.status).to eq 200

    post :create, create_idea_params(1, title: "unique title", quality: nil)

    expect(Idea.count).to eq 3
    expect(response.body).to eq "[\"Quality can't be blank\"]"
    expect(response.status).to eq 200
  end

end
