'use clients';
import Image from 'next/image';
import { useState } from 'react';


const AllUnitData = [
  { id: 0, unit: "Orthopedics", location: "1st Floor", totalBeds: 20, occupied: 10, available: 10, occupancyRate: 50, user: "/images/user-1.jpeg" },
  { id: 1, unit: "Oncology", location: "2nd Floor", totalBeds: 30, occupied: 15, available: 15, occupancyRate: 50, user: "/images/user-2.jpeg" },
];

const AllUnit = () => {
  return <>
    <div className='space-y-4'>
      <h2 className='text-gray-800 text-2xl font-semibold'>Unit Breakdown</h2>
      <p className='text-gray-800 text-lg font-semibold'>Search Units</p>
      <div className='flex items-center gap-x-3'>
        <input type="text" className='bg-white border border-gray-400  px-6 py-2 rounded-md outline-none focus:ring ring-blue-500 appearance-none' placeholder='Search by unit name' />
        <button className='bg-blue-500 text-white rounded-md px-5 py-2'>Filter</button>
      </div>

      <div className="max-w-[85rem] bg-gray-100/50 rounded-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* Card */}
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white p-3 border border-gray-200 rounded-xl shadow-2xs overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>

                      <th
                        scope="col"
                        className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start"
                      >
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase text-gray-800 ">
                            Unit
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase text-gray-800 ">
                            Location
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase text-gray-800 whitespace-nowrap">
                            Total beds
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase text-gray-800 ">
                            Occupied
                          </span>
                        </div>
                      </th>
                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase text-gray-800 ">
                            Available
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-start">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase text-gray-800 whitespace-nowrap">
                            Occupancy Rate
                          </span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">

                    {AllUnitData.map((data) => (
                      <tr key={data.id} >

                        <td className="size-px whitespace-nowrap">
                          <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                            <div className="flex items-center gap-x-3">
                              <Image
                                className="inline-block size-9.5 rounded-full"
                                src={data.user}
                                alt="Avatar"
                                width={200}
                                height={200}
                                priority
                              />
                              <div className="grow">
                                <span className="block text-sm font-semibold text-gray-800 ">
                                  Christina Bersh
                                </span>
                                <span className="block text-sm text-gray-500 ">
                                  christina@site.com
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="h-px w-72 whitespace-nowrap">
                          <div className="px-6 py-3">
                            {data.location}

                          </div>
                        </td>
                        <td className="size-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            {data.totalBeds}
                          </div>
                        </td>
                        <td className="size-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            {data.occupied}
                          </div>
                        </td>
                        <td className="size-px whitespace-nowrap">
                          <div className="px-6 py-3">
                            <span className="text-sm text-gray-500 ">
                              {data.available}
                            </span>
                          </div>
                        </td>
                        <td className="size-px whitespace-nowrap">
                          <div className="px-6 py-1.5">
                            <a
                              className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-hidden focus:underline font-medium "
                              href="#"
                            >
                              {data.occupancyRate}%
                            </a>
                          </div>
                        </td>


                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </>
}


const tabs = [
  { id: 'tab1', label: 'All units', content: <AllUnit /> },
  { id: 'tab2', label: 'Orthopedics', content: 'This is your Profile Tab.' },
  { id: 'tab3', label: 'Oncology', content: 'Here you can change Settings.' },
  { id: 'tab4', label: 'Pediatrics', content: 'Here you can change Settings.' },
  { id: 'tab5', label: 'Cardiology', content: 'Here you can change Settings.' },
  { id: 'tab6', label: 'Neurology', content: 'Here you can change Settings.' },
];

export default function PatientTabs() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className="w-full mx-auto">
      <div className="flex border-b border-gray-300 w-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-4 transition-all duration-300 cursor-pointer ${activeTab === tab.id
              ? 'border-b-2 border-gray-700 text-gray-700 font-semibold'
              : 'text-gray-600 hover:text-gray-700'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-4 p-4 bg-white rounded">
        {tabs.map((tab) =>
          activeTab === tab.id ? (
            <section key={tab.id} className="text-gray-700">
              {tab.content}
            </section>
          ) : null
        )}
      </div>
    </div>
  );
}
