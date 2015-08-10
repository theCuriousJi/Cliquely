class Tag < ActiveRecord::Base
  validates_inclusion_of :name, in: ['Media', 'News', 'Restaurants', 'Useful Stuff', 'Business', "Op-Eds", 'Random', "Sports", 'Fashion', 'Tech']
  validates :name, uniqueness: true, presence: true

  has_many :taggings
  has_many :posts, through: :taggings, source: :post

end
