import React from 'react'
import Info from '../../components/profile/info'
import Posts from '../../components/profile/posts'
import { useSelector } from 'react-redux'
import LoadIcon from '../../images/loading.gif'

const Profile = () => {
    const { profile } = useSelector(state => state)
    return (
        <div className='profile'>

            {
                profile.loading
                    ? <img className="d-block mx-auto my-4" style={{ maxWidth: "120px", maxHeight: "50px" }} src={LoadIcon} alt="loading" />
                    : <Info />
            }
            <Posts />

        </div>
    )
}

export default Profile