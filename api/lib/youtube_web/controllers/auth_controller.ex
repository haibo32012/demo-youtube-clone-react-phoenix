defmodule YoutubeWeb.AuthController do
  use YoutubeWeb, :controller

  alias Youtube.{Accounts, Accounts.User}

  def index(conn, %{"provider" => provider}) do
    redirect conn, external: authorize_url!(provider)
  end

  def callback(conn, %{"provider" => provider, "code" => code}) do
    client = get_token!(provider, code)

    access_token = client.token.access_token

    params = get_user!(provider, client)

    user_params = get_user_params(params, provider, access_token)

    changeset = User.changeset(%User{}, user_params)

    signin(conn, changeset)
  end

  defp get_user_params(params, provider, access_token) do
    %{
      token: access_token,
      email: params.body["email"],
      avatar: params.body["picture"],
      first_name: params.body["given_name"],
      last_name: params.body["family_name"],
      provider: provider
    }
  end

  defp signin(conn, changeset) do
    user = Accounts.create_or_update_user(changeset);
  end

  defp get_token!("google", code), do: Google.get_token!(code: code)

  defp get_user!("google", client) do
    OAuth2.Client.get!(client, "https://www.googleapis.com/plus/v1/people/me/openIdConnect")
  end

  defp authorize_url!("google"), do: Google.authorize_url!(scope: "https://www.googleapis.com/auth/userinfo.email")
end