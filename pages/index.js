import Login from '../components/Login';
import Head from 'next/head'
import Header from '../components/Header'
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon"
import Image from "next/image"
import {getSession,useSession} from 'next-auth/client'

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {session}
  }
}

export default function Home() {
  const [session] = useSession();

  if (!session) return <Login/>

  return (
    <div className="">
      <Head>
        <title>Nhan's Doc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section className='bg-[#F8F9FA] pb-10 px-10'>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between  py-6">
            <h2 className="text-gray-700 text-lg">Tạo văn bản mới</h2>
            <Button
              color="gray"
              buttonType = "outline"
              iconOnly={true}
              ripple = "dark"
              className = "border-0"
            >
              <Icon name="more_vert" size="3xl"/>
            </Button>
          </div>
          <div>
            <div className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700">
              <Image 
                src='https://links.papareact.com/pju'
                layout='fill'
              />
            </div>
            <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">Blank</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-10 md:px-0">
        <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="font-medium flex-grow">My Documents</h2>
            <p className="mr-12">Date created</p>
            <Icon name="folder" size="3xl" color="gray"/>
          </div>
        </div>
      </section>
    </div>
  )
}
