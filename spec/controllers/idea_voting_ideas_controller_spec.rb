require 'rails_helper'

RSpec.describe Api::V1::IdeasController, type: :controller do
  it "upvotes an idea" do
    idea = Idea.create(title: "t1", body: "b1", quality: 0)
    post :vote, idea: {id: idea.id, vote: 1}
    idea.reload
    expect(idea.quality).to eq 1
    expect(response.status).to eq 200
    expect(response.body).to eq "upvoted #{idea.title}"

    idea = Idea.create(title: "t2", body: "b2", quality: 1)
    post :vote, idea: {id: idea.id, vote: 1}
    idea.reload
    expect(idea.quality).to eq 2

    idea = Idea.create(title: "t3", body: "b3", quality: 2)
    post :vote, idea: {id: idea.id, vote: 1}
    idea.reload
    expect(idea.quality).to eq 2

  end

  it "downvotes an idea" do
    idea = Idea.create(title: "t1", body: "b1", quality: 0)
    post :vote, idea: {id: idea.id, vote: -1}
    idea.reload
    expect(idea.quality).to eq 0

    idea = Idea.create(title: "t2", body: "b2", quality: 1)
    post :vote, idea: {id: idea.id, vote: -1}
    idea.reload
    expect(idea.quality).to eq 0

    idea = Idea.create(title: "t3", body: "b3", quality: 2)
    post :vote, idea: {id: idea.id, vote: -1}
    idea.reload
    expect(idea.quality).to eq 1

    expect(response.status).to eq 200
  end
end
