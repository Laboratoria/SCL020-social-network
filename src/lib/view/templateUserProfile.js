export const userProfile = () => {
    const divUserProfile = document.createElement('div')
    divUserProfile.setAttribute('id', 'containerUserProfile')
    const viewUserProfile = `
`
    divUserProfile.innerHTML = viewUserProfile;
    return divUserProfile;
};