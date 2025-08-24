import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';

// Map currency codes to flag emojis
const currencyFlags = {
  USD: "us",
  EUR: "eu",
  GBP: "gb",
  XAF: "cm",
  CAD: "ca",
  JPY: "jp",
  CNY: "cn",
  NGN: "ng",
  INR: "in",
  AUD: "au",
  ZAR: "za",
  BRL: "br",
  KES: "ke",
  GHS: "gh",
  // add more as needed
};


const currencies = [
  {value: 'EUR'},
  {value: 'USD'},
  {value: 'GBP'},
  {value: 'XAF'},
  {value: 'CAD'},
  {value: 'JPY'},
  {value: 'CNY'},
  {value: 'NGN'},
  {value: 'INR'},
  {value: 'AUD'},
  {value: 'BRL'},
  {value: 'KES'},
  {value: 'GHS'}
];


function CurrencySelector({setSelectedCurrency, selectedCurrency}) {
 
  return (
    <>
      <div className="">
        <Listbox value={selectedCurrency} onChange={e=>{selectedCurrency = e.value; setSelectedCurrency(e.value)}}>

          <ListboxButton >
            <div className='w-[280px] p-2 items-center border flex rounded-md cursor-pointer'>
              <div className='pr-2'>
                <img src={`https://flagcdn.com/48x36/${currencyFlags[selectedCurrency]}.png`} alt="" className="h-[20px]" />
              </div>
              <div>
                {selectedCurrency}
              </div>
            </div>
          </ListboxButton>
          <ListboxOptions anchor="bottom" className="ml-0 mt-1 w-[280px] cursor-pointer rounded-md">
            {currencies.map((currency) => (
              <ListboxOption key={currency.value} value={currency} className="group flex w-full gap-2 bg-white px-1 items-center data-focus:bg-blue-100 py-1 cursor-poi">
                <img src={`https://flagcdn.com/48x36/${currencyFlags[currency]}.png`} alt="" className="h-[20px]" />
                {currency.value}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </Listbox>
      </div>
    </>
  );
}

export default CurrencySelector;