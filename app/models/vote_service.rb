class VoteService
  attr_reader :idea, :vote_modifier

  def initialize(params)
    @idea = Idea.find_by(id: params[:idea][:id])
    @vote_modifier = params[:idea][:vote]
  end

  def vote
    if vote_cast?
      execute_vote
      "#{modifier_to_english} #{idea.title}"
    else
      "something went wrong..."
    end
  end

  def execute_vote
    idea.quality = keep_within_bounds(idea.quality + vote_modifier.to_i)
    idea.save
  end

  def modifier_to_english
    Hash.new("didn't vote").merge({"1" => "upvoted", "-1" => "downvoted"})[vote_modifier]
  end

  def vote_cast?
    idea && vote_modifier
  end

  def keep_within_bounds(n)
    case
    when n < 0 then 0
    when n > 2 then 2
    when true then n
    end
  end

end
