defmodule YoutubeWeb.Router do
  use YoutubeWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
    plug Guardian.Plug.VerifyHeader, realm: "Bearer"
    plug Guardian.Plug.LoadResource
  end

  scope "/api", YoutubeWeb do
    pipe_through :api

    resources "/users", UserController, except: [:new, :edit]
  end

  scope "/auth", YoutubeWeb do
    get "/:provider", AuthController, :index
    post "/:provider/callback", AuthController, :callback
  end
end
