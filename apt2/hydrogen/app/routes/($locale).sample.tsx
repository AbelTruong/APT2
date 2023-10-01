import { json, type MetaFunction } from '@remix-run/node'
import transformPageTitle from '../helpers/transformPageTitle'
import Sample from '../pages/Sample'

export const meta: MetaFunction = ({ data }: { data: any }) => {
    return [{ title: transformPageTitle(data.page.title) }]
}

export async function loader() {
    return json({
        page: { title: 'Sample', handle: '/sample' },
    })
}

export default function SamplePage() {
    return (
        <div className="">
            <Sample />
        </div>
    )
}
