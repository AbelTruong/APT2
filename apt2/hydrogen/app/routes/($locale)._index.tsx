import { json, type MetaFunction } from '@remix-run/node'
import transformPageTitle from '../helpers/transformPageTitle'
import HomePage from '../pages/Homepage'
import Modal from '../components/Modal'

export const meta: MetaFunction = ({ data }: { data: any }) => {
    return [{ title: transformPageTitle(data.page.title) }]
}

export async function loader() {
    return json({
        page: { title: 'Homepage', handle: '/' },
    })
}

export default function IndexPage() {
    return (
        <div className="">
            <h1 className="text-[#066BB6]">Heading</h1>
            <HomePage />
            <Modal heading="Duong thuong dau" />
        </div>
    )
}
