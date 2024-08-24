import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { countries_data } from "@/data/countries";
import { forwardRef, useEffect, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { useMediaQuery } from "usehooks-ts";

export type Country = {
  name: string;
  code: string;
  flag: string;
  dialing_code: string;
};

type ButtonProps = {
  country: Country;
  setOpen: (value: boolean) => void;
};

type ComboProps = {
  setSelectedCountry: (country: Country) => void;
};

const ActionButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ country, setOpen }, ref) => {
    return (
      <Button
        type="button"
        variant="outline"
        onClick={() => setOpen(true)}
        className="--w-[150px] flex w-full items-center justify-between gap-2 text-gray-500"
        ref={ref}
      >
        <div className="flex items-center gap-2">
          <span className="flex">{country.flag}</span>
          <span className="flex">{country.name}</span>
          <span className="flex">{country.code}</span>
        </div>
        <HiChevronDown className="h-4 w-4" />
      </Button>
    );
  },
);

export const getCountry = (countryName: string) => {
  return countries_data.find(
    (country) => country.name.toLowerCase() === countryName.toLowerCase(),
  );
};

export function CountriesComboBoxResponsive(props: Readonly<ComboProps>) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [selectedCountry, setSelectedCountry] = useState("United States");

  useEffect(() => {
    props.setSelectedCountry(getCountry(selectedCountry)!);
  }, [selectedCountry]);

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <ActionButton
            country={getCountry(selectedCountry)!}
            setOpen={setOpen}
          />
        </PopoverTrigger>
        <PopoverContent className="w-[250px] p-0" align="start">
          <CountryList
            setOpen={setOpen}
            setSelectedCountryName={setSelectedCountry}
          />
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <ActionButton
          country={getCountry(selectedCountry)!}
          setOpen={setOpen}
        />
      </DrawerTrigger>
      <DrawerContent>
        <div className="mt-4 border-t">
          <CountryList
            setOpen={setOpen}
            setSelectedCountryName={setSelectedCountry}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

type ListProps = {
  setOpen: (open: boolean) => void;
  setSelectedCountryName: (country: string) => void;
};

function CountryList(props: Readonly<ListProps>) {
  return (
    <Command>
      <CommandInput
        placeholder="Filter country..."
        className="my-2 h-9 focus:border-lime-500"
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup>
          {countries_data.map((country: Country) => (
            <CommandItem
              key={country.name}
              value={country.name}
              onSelect={(value) => {
                props.setSelectedCountryName(value);
                props.setOpen(false);
              }}
            >
              <div className="--flex-wrap flex items-center gap-2 text-balance">
                <div className="flex gap-2">
                  <span className="flex">{country.flag}</span>
                  <span className="flex">{country.name}</span>
                </div>
                <span className="flex">{country.code}</span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}
