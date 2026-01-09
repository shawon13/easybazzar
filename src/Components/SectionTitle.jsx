
const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className='text-center mb-10 mx-auto'>
            <h4 className='mb-2 text-xl italic font-inter capitalize' style={{ color: '#D99904' }}>--- {subHeading} ---</h4>
            <h3 className='section-title-w border-y-2 w-1/2 mx-auto font-normal py-2.5 uppercase  text-2xl sm:text-3xl md:text-4xl font-inter'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;