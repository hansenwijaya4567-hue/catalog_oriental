let currentRoute = { page: 'home', brandKey: null, carId: null };

function parseHash() {
  const hash = location.hash.replace('#', '') || '/';
  const parts = hash.split('/').filter(Boolean);

  if (parts.length === 0 || (parts.length === 1 && parts[0] === '/')) {
    return { page: 'home', brandKey: null, carId: null };
  }
  if (parts[0] === 'brand' && parts[1]) {
    return { page: 'brand', brandKey: parts[1], carId: null };
  }
  if (parts[0] === 'car' && parts[1] && parts[2]) {
    return { page: 'car', brandKey: parts[1], carId: parts[2] };
  }
  return { page: 'home', brandKey: null, carId: null };
}

let onRouteChange = null;

export function init(routeHandler) {
  onRouteChange = routeHandler;
  window.addEventListener('hashchange', handleHashChange);
  window.addEventListener('popstate', handleHashChange);
  handleHashChange();
}

function handleHashChange() {
  const route = parseHash();
  currentRoute = route;
  if (onRouteChange) onRouteChange(route);
}

export function navigate(path) {
  location.hash = path;
}

export function getCurrentRoute() {
  return { ...currentRoute };
}

export function goBack() {
  window.history.back();
}
