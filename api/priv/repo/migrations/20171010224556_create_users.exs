defmodule Youtube.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :username, :string
      add :email, :string
      add :avatar, :string
      add :provider, :string
      add :first_name, :string
      add :last_name, :string
      add :token, :string

      timestamps()
    end

  end
end
