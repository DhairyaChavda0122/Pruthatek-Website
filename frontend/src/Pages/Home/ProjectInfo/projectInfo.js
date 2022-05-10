import '../vars.css';
// import img from '../ProjectInfo/img.jpeg';
import '../ProjectInfo/projectInfoCSS.css';

function ProjectInfo(){
    const info = [
        {
            count: '07',
            title: 'Projects Completed'
        },
        {
            count: '03',
            title: 'Active Clients'
        },
        {
            count: '15',
            title: 'Cups of Coffee'
        },
        {
            count: '10',
            title: 'Happy Clients'
        },
    ];

    const projInfo = info.map((item, index) => {
        return(
            <div className='df' key={index}>
                <h1>{item.count}</h1>
                <div className='w50'><p>{item.title}</p></div>
            </div>
        )
    })

    return(
        <section className='project-info df'>
            {projInfo}
        </section>
    );
}

export default ProjectInfo;