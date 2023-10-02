'use client';

import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { NavigationbarCompInterface } from './NavigationBarComponent';
import { getIcon } from './ClientIcons';

export default function PopoverWorks({ group_data }: { group_data: NavigationbarCompInterface }) {
  return (
    <Popover className="relative">
      <Popover.Button className="flex items-center gap-x-1 font-regular text-white text-lg outline-none">
        {group_data.name}
        <ChevronDownIcon className="hidden sm:block h-5 w-5 flex-none text-white/90" aria-hidden="true" />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute -left-52 sm:-left-8 top-full z-10 mt-3 w-screen max-w-max sm:max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
          <div className="p-2 sm:p-4">
            {group_data.elements.map((item, i) => {
              let CurrentIcon = getIcon(item.iconname);
              return (
                <div
                  key={i}
                  className="group relative flex items-center gap-x-4 sm:gap-x-6 rounded-lg p-2 sm:p-4 text-sm leading-6 hover:bg-gray-50"
                >
                  <div className="flex h-9 w-9 sm:w-11 sm:h-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <CurrentIcon className="h-5 w-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-green-700" aria-hidden="true" />
                  </div>
                  <div className="flex-auto">
                    <a href={item.path} className="block text-gray-900 font-regular text-base font-medium">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
