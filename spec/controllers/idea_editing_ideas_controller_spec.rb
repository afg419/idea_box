require 'rails_helper'

RSpec.describe Api::V1::IdeasController, type: :controller do
  it "edits an idea" do
    idea = Idea.create(title: "t1", body: "b1", quality: 0)
    put :update, id: idea.id, idea: {title: "edited-t1", body: "edited-b1"}
    idea.reload

    expect(idea.title).to eq "edited-t1"
    expect(idea.body).to eq "edited-b1"

    reply = JSON.parse(response.body)

    expect(response.status).to eq 200
    expect(reply["title"]).to eq "#{idea.title}"
  end
end
