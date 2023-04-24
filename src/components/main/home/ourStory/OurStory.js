import './ourStory.css'
import storyImage1 from '../../../assets/Mario and Adrian A.jpg'
import storyImage2 from '../../../assets/Mario and Adrian b.jpg'
import storyImage3 from '../../../assets/restaurant chef B.jpg'

const OurStory = () => {
  return (
    <div className='story-container'>
      <div className='story-text'>
        <h2>Our Story</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Interdum varius sit amet mattis vulputate. Sit amet consectetur
          adipiscing elit pellentesque habitant morbi tristique. In nisl
          nisi scelerisque eu ultrices vitae auctor. At lectus urna duis
          convallis convallis tellus id interdum. Amet venenatis urna cursus
          eget nunc scelerisque viverra. Ac tincidunt vitae semper quis.
          Malesuada pellentesque elit eget gravida cum. Viverra maecenas
          accumsan lacus vel facilisis volutpat. Egestas fringilla phasellus
          faucibus scelerisque. Congue eu consequat ac felis donec et odio
          pellentesque. Velit sed ullamcorper morbi tincidunt ornare. Vel elit
          scelerisque mauris pellentesque pulvinar pellentesque. Sem fringilla
          ut morbi tincidunt augue interdum velit. Adipiscing bibendum est
          ultricies integer quis auctor elit sed. Eget gravida cum sociis natoque
          penatibus et magnis dis parturient. Quisque non tellus orci ac auctor.
          Pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat.
        </p>
      </div>
      <div className='story-images'>
        <img src={storyImage1} />
        <img src={storyImage2} />
        <img src={storyImage3} />
      </div>
    </div>
  )
}

export default OurStory