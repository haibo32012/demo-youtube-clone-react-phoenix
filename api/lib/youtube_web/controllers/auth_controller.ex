defmodule YoutubeWeb.AuthController do
  use YoutubeWeb, :controller
  plug Ueberauth

  alias Youtube.{Accounts, Accounts.User}

  def callback(%{assigns: %{ueberauth_auth: auth}} = conn, %{"provider" => provider}) do
    user_params = %{
      token: auth.credentials.token,
      email: auth.info.email,
      avatar: auth.info.image,
      first_name: auth.info.first_name,
      last_name: auth.info.last_name,
      provider: provider
    }

    changeset = User.changeset(%User{}, user_params)

    signin(conn, changeset)
  end

  defp signin(conn, changeset) do
    user = Accounts.create_or_update_user(changeset);
  end
end