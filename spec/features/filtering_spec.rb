require 'rails_helper'

RSpec.feature "Filters ideas", type: :feature do
  scenario "A user can filter ideas", :js => true do
    create_ideas(3)
    VCR.use_cassette 'sees-all-ideas' do
      visit root_path
      expect(page).to have_content("Title0")
      expect(page).to have_content("Title1")
      expect(page).to have_content("Title2")

      fill_in 'search-idea', with: "itle1"

      expect(page).to_not have_content("Title0")
      expect(page).to have_content("Title1")
      expect(page).to_not have_content("Title2")
    end
  end
end
