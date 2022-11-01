import Link from 'next/link'
import { NextPage } from 'next'
import { Hash } from 'react-feather'

import { teams } from '~/shared/jsons/teams'
import NotificationLayout from '~/components/templates/NotificationLayout'

const Notifications: NextPage = (): JSX.Element => {
  return (
    <NotificationLayout metaTitle="Notifications">
      <div className="grid grid-cols-5 overflow-hidden text-slate-700">
        <section className="w-full flex-shrink-0">
          <h1 className="text-base font-semibold">List of Projects</h1>
          <nav className="px-4 py-8">
            <ul className="-mx-2 mt-4 flex h-[80vh] min-h-[80vh] flex-col space-y-1 overflow-auto px-2 text-sm">
              {teams.map(({ id, name }) => (
                <li key={id}>
                  <Link href={`/notifications/projects/${id}`}>
                    <a
                      href="#"
                      className={`
                        text-semibold flex w-full items-center space-x-2 rounded-md bg-blue-600 py-2 px-4 text-white outline-none
                        transition duration-75 ease-in-out hover:bg-blue-700
                      `}
                    >
                      <Hash className="h-4 w-4" />
                      <span className="line-clamp-1">{name}</span>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
        <section className="col-span-4 w-full flex-1 bg-red-50">table content</section>
      </div>
    </NotificationLayout>
  )
}

export default Notifications
