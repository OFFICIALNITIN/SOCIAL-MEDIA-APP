import React from 'react'
import Posts from '../components/home/Posts'
import Status from '../components/home/Status'
import { useSelector } from 'react-redux'
import LoadIcon from '../images/loading.gif'

const Home = () => {

    const { homePosts } = useSelector(state => state)
    return (
        <div className='home row mx-0'>
            <div className='col-md-8'>
                <Status />
                {
                    homePosts.loading
                        ? <img src={LoadIcon} style={{ maxWidth: "120px", maxHeight: "50px" }} alt="loading" className="d-block mx-auto" />
                        : homePosts.result === 0
                            ? <h2 className="text-center">No post</h2>
                            : <Posts />
                }

            </div>
            <div className='col-md-4'></div>
        </div>
    )
}

export default Home