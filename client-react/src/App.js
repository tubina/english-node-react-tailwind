import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="fixed z-50 top-0 clear-both
              bg-white w-full shadow
              shadow-slate-300">
              <div className="bg-white container mx-auto flex justify-between items-center h-16 " >
                  <div className="font-light">
                      <a href="/home">
                          Logo
                      </a>
                  </div>
                  <ul className="flex gap-6 text-sm font-medium text-slate-700">
                      <li>
                          <a href="/home"
                          class="hover:border-b-2
                          hover:text-rose-500
                          border-rose-500">
                              Home
                          </a>
                      </li>
                      <li>
                          <a href="#"
                          class="hover:border-b-2
                          hover:text-rose-500
                          border-rose-500">
                              Blog
                          </a>
                      </li>
                      <li>
                          <a href="/store"
                          class="hover:border-b-2
                          hover:text-rose-500
                          border-rose-500">
                              Loja
                          </a>
                      </li>
                      <li>
                          <a href="#"
                          class="hover:border-b-2
                          hover:text-rose-500
                          border-rose-500">
                              Oferta
                          </a>
                      </li>
                  </ul>
                  <ul className="flex items-center gap-4 pr-5 text-sm font-semibold text-slate-700">
                      <li>
                          <a href="#" className="transition hover:-translate-y-3 transition-opacity hover:text-black ">
                              <ion-icon name="search-outline" className="text-2xl"></ion-icon>
                          </a>
                      </li>
                      <li class="relative">
                          <a href="/cart" className=" transition hover:-translate-y-3 transition-opacity hover:text-black ">
                              <ion-icon name="cart-outline" className=" text-2xl"></ion-icon>
                              <div class="absolute -mt-8 ml-3 pt-0 pl-1 pr-1 pb-0 bg-black rounded-full text-xs font-normal text-white">3</div>
                          </a>
                      </li>
                      <li class="relative">
                          <a href="#" className="transition hover:-translate-y-3 transition-opacity hover:text-black ">
                              <ion-icon name="heart-outline" className="text-2xl"></ion-icon>
                              <div class="absolute -mt-8 ml-3 pt-0 pl-1 pr-1 pb-0 bg-black rounded-full text-xs font-normal text-white">3</div>
                          </a>
                      </li>
                      <li>
                          <a href="/login" className="font-medium transition hover:-translate-y-3 transition-opacity hover:text-black ">
                              Login
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
    </div>
  );
}

export default App;
