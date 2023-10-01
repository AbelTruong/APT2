import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const HomePage = (props) => {
  const renderCard = [
    {
      url: '/blogs',
      name: 'Blogs',
      content:
        'Nơi chia sẽ một vài điều hay ho mà tôi thấy được, chiêm nghiệm, học được trong cuộc sống.',
    },
    {
      url: '/youtube-feed',
      name: 'Youtube Feed',
      content: 'Nơi chia sẽ một vài điều hay ho mà tôi thấy được, học được trong cuộc sống.',
    },
  ]

  return (
    <div className="flex flex-col text-te-light dark:text-te-dark pt-[10%] md:mx-5 lg:mx-40">
      <div className="flex flex-col sm:flex-row space-x-10 justify-between">
        <div className="mb-12">
          <h1 className="text-[32px] mb-4">Welcome to my website</h1>
          <p>Learn follow and master rules, then break it.</p>
        </div>
        <div className="mx-auto text-center text-[30px]">APT2</div>
      </div>
      <div>
        <h1 className="text-[20px] mb-4">What's interesting here?</h1>
        <div className="grid gap-y-6">
          {renderCard.map((card) => (
            <div
              key={card.url}
              className="flex flex-col sm:flex-row justify-between items-center p-6 bg-bg-dark dark:bg-bg-light border border-gray-200 rounded-lg shadow dark:border-gray-700"
            >
              <div>
                <h5 className="mb-2 text-[24px] font-bold tracking-tight  text-te-dark dark:text-te-light">
                  {card.name}
                </h5>
                <p className="mb-3 font-normal text-bermuda dark:text-tahiti">{card.content}</p>
              </div>
              <Button
                content={
                  <div className="flex flex-nowrap items-center">
                    <div>Đi thôi nào</div>
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 ml-2 -mr-1 hidden md:block"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                }
                onClick={() => props.navigate(`${card.url}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

HomePage.propTypes = {}

export default HomePage
