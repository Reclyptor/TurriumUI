export const getAuthUser = (): gapi.auth2.GoogleUser | undefined => {
    if (isAuthUserSignedIn()) {
        return window.gapi?.auth2?.getAuthInstance().currentUser.get();
    }
}

export const isAuthUserSignedIn = (): boolean => {
    return window.gapi?.auth2?.getAuthInstance().isSignedIn.get() || false;
};

export const signOutAuthUser = (): any => {
    if (isAuthUserSignedIn()) {
        return window.gapi?.auth2?.getAuthInstance().signOut();
    }
};

export const getAuthUserIDToken = (): string => {
    return window.gapi?.auth2?.getAuthInstance().currentUser.get().getAuthResponse().id_token || "";
};