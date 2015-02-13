class Tag < ActiveRecord::Base
  validates_inclusion_of :name, in: ['Media', 'News', 'Restaurants / Bars', 'Useful Stuff', 'Business', "Op-Eds", 'Random', "Sports"]
  validates :name, uniqueness: true, presence: true

  has_many :taggings
  has_many :posts, through: :taggings, source: :post

end
