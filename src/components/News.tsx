import React from "react";
import styled from "styled-components";
import { NewsSection } from "../features/news/newsAPI";
import { H2, H4, H6 } from "../theme/Heading";
import VStack from "../theme/VStack";

type NewsProps = {
	news: NewsSection[];
};

const NewsBox = styled(VStack)`
	max-width: 500px;
	background-color: #add8e6;
	margin-top: 24px;
	padding: 16px;
	border-radius: 8px;
`;

const News = ({ news }: NewsProps) => {
	return (
		<VStack>
			<H2>News</H2>
			<VStack>
				{news?.map((newsSection) => {
					return (
						<NewsBox>
							<H4>
								<a href={newsSection?.href} target="_blank" rel="noreferrer">
									{newsSection?.title}
								</a>
							</H4>
							<img
								src={newsSection?.thumbnail}
								height="150px"
								alt="Thumbnail"
							/>
							<p>{newsSection?.excerpt}</p>
						</NewsBox>
					);
				})}
			</VStack>
		</VStack>
	);
};

export default News;
