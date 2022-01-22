export default function ({ store, redirect }: any) {
  // If the user is not authenticated redirect to login page
  if (!store.getters.isAuthenticated) {
    return redirect('/login')
  }
}
