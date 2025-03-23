import PageContent from "./PageContent";
function HomePage(){
    return (
        <PageContent title="Welcome to our awesome app!">
            <p>
                This is a simple app that allows you to manage events. You can create, edit, and delete events.
            </p>
            <p>
                You can also sign up for our newsletter to receive updates on new events.
            </p>
        </PageContent>
    );
}

export default HomePage;