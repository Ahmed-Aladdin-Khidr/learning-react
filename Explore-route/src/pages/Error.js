import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main className="content">
        <h1>404 Page Not Found!</h1>
      </main>
    </>
  );
}

export default ErrorPage;