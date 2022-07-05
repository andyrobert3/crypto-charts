import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import News from "../components/News";
import { getNewsThunk } from "../features/news/newsThunk";

const NewsContainer = () => {
	const news = useAppSelector((state) => state.news.data);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getNewsThunk());
	}, []);

	return <News news={news} />;
};

export default NewsContainer;
