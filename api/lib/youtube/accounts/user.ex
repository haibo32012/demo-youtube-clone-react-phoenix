defmodule Youtube.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset
  alias Youtube.Accounts.User


  schema "users" do
    field :avatar, :string
    field :email, :string
    field :provider, :string
    field :username, :string
    field :token, :string
    field :first_name, :string
    field :last_name, :string

    timestamps()
  end

  @doc false
  def changeset(%User{} = user, attrs) do
    user
    |> cast(attrs, [:username, :email, :avatar, :provider, :first_name, :last_name, :token])
    |> validate_required([:email, :avatar, :provider, :first_name, :last_name, :token])
  end
end
