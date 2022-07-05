import React from "react";
import { NewsSection } from "../features/news/newsAPI";

type NewsProps = {
	news: NewsSection[];
};

const News = ({ news }: NewsProps) => {
	return (
		<div>
			<h4>News</h4>
			<div>
				{news &&
					news.map((newsSection) => {
						return (
							<div>
								<h6>
									<a href={newsSection?.href} target="_blank" rel="noreferrer">
										{newsSection?.title}
									</a>
								</h6>
								<img
									src={newsSection?.thumbnail}
									height="150px"
									alt="Thumbnail"
								/>
								<p>{newsSection?.excerpt}</p>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default News;
