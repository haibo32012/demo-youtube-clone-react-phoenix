defmodule Youtube.Accounts do
  @moduledoc """
  The Accounts context.
  """

  import Ecto.Query, warn: false
  alias Youtube.Repo

  alias Youtube.Accounts.User

  def list_users do
    Repo.all(User)
  end

  def get_user!(id), do: Repo.get!(User, id)

  def get_user_by_email(email), do: Repo.get_by(User, email: email)

  def create_user(attrs \\ %{}) do
    %User{}
    |> User.changeset(attrs)
    |> Repo.insert()
  end

  def update_user(%User{} = user, attrs) do
    user
    |> User.changeset(attrs)
    |> Repo.update()
  end

  def delete_user(%User{} = user) do
    Repo.delete(user)
  end

  def change_user(%User{} = user) do
    User.changeset(user, %{})
  end

  def create_or_update_user(changeset) do
    case get_user_by_email(changeset.changes.email) do
      nil ->
        create_user(changeset.changes)
      user ->
        {:ok, update_user(user, changeset.changes)}
    end
  end
end
