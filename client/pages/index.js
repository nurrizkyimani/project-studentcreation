import Nav from '../components/nav';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function IndexPage() {
	const [ projects, setProjects ] = useState([]);

	useEffect(() => {
		const fetching = async () => {
			try {
				const res = await axios.get(`${process.env.API_URL}/project/all`);
				setProjects(res.data.data);
			} catch (error) {
				console.log(error);
			}
		};
		fetching();
	}, []);

	useEffect(
		() => {
			console.log(projects);
		},
		[ projects ]
	);

	return (
		<div>
			<Nav />
			<div className="">
				<h1 className="text-center text-2xl pb-10">Next.js + Tailwind CSS</h1>
        <div
          className="flex w-full justify-around flex-wrap px-3 "
          onClick={(e) => console.log('click')}
          >
					{projects.map((project) => (
						<div
							className="container max-w-md shadow-xl bg-gray-300 p-10 rounded-md border mb-8 transform hover:scale-105 duration-200 hover:shadow-2xl"
							key={project.id}
						>
              <div className="items-center text-gray">
								<h1 className="text-2xl">{project.title}</h1>
              </div>

							<div className="items-center mt-4 text-gray">
								<h1 className="text-md">Description</h1>
								<h3 className="text-gray-600 ">{project.description}</h3>
              </div>

              <div className="items-center mt-4 text-gray">
								<h1 className="text-md">Member</h1>
								<h3 className="text-gray-600 ">{project.member}</h3>
              </div>

              <div className="items-center mt-4 text-gray">
								<h1 className="text-md">Topic</h1>
								<h3 className="text-gray-600 ">{project.topic}</h3>
              </div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
