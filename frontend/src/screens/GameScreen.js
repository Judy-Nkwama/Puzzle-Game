import React, { useContext, useEffect, useMemo, useState } from "react";
import { useGlobalContext } from "../data/applicationContext";
import { cropHandler } from "./PictureSelectionScreen";
import { Row } from "reactstrap";
import { CreateAppContext } from "../data/applicationContext";
import PuzzelBlock from "../components/PuzzelBlock";
import config from "../constants/config";

const GameScreen = ({ name, value }) => {

	const { username } = useGlobalContext();
	const [records, setRecord] = useState([]);

	const fetchData = async () => {
		try {
			const response = await fetch("/api");
			const data = await response.json();
			const newRecords = data[0].sort((a, b) => b.score - a.score);
			setRecord(newRecords);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const sendData = () => {
		fetch("/api/data", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				"username": username,
				"move": gamme_linked_list.hamleNumber,
				"score": gamme_linked_list.score
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.error(error);
			});
	}

	const { 
		gamme_linked_list, 
		bg_image, 
		selected_pic_detais, 
		puzzel_blocks_per_row, 
		handleFieldChange 
	} = useContext(CreateAppContext);

	const onHamle = (url) => {
		handleFieldChange("gamme_linked_list", gamme_linked_list.hamle(url));
	};

	const go_to_next_level = async () => {

		const new_pzl_size = puzzel_blocks_per_row + 2;

		await cropHandler(
			name,
			value,
			selected_pic_detais.croppedAreaPixels,
			selected_pic_detais.rotation,
			new_pzl_size,
			handleFieldChange,
			{
				score: gamme_linked_list.score,
				hamleNumber: gamme_linked_list.hamleNumber,
			}
		);

		handleFieldChange("puzzel_blocks_per_row", new_pzl_size);

		//gamme_linked_list.mixedList.genMixedList();

	};

	const finish_the_game = () => {
		sendData();
		window.location.reload();
	};

	const level = useMemo(() => {
		return (puzzel_blocks_per_row - 4) / 2 + 1;
	}, [puzzel_blocks_per_row]);

	console.log(gamme_linked_list.mixedList)

	const pzlBlks = gamme_linked_list.mixedList.map((bgImgUrl) => {
		const isBlockActive = gamme_linked_list?.actifNode?.data == bgImgUrl;
		const isAtCorrectPlace = gamme_linked_list.isUrlAtCoorectPlace(bgImgUrl);
		const isGameFinished = gamme_linked_list.isGameFinished();
		const size =
			config.PUZZEL_TABLE_SIZE / puzzel_blocks_per_row -
			(config.BLK_MARGIN * 2 + 1.6);

		return (
			<PuzzelBlock
				key={bgImgUrl}
				bgUrl={bgImgUrl}
				isBlockActive={isBlockActive}
				isAtCorrectPlace={isAtCorrectPlace}
				isGameFinished={isGameFinished}
				onClick={onHamle.bind(this, bgImgUrl)}
				style={{
					width: size,
					height: size,
					margin: !isGameFinished && config.BLK_MARGIN + "px",
				}}
			/>
		);
	});

	return (
		<Row className="d-flex justify-content-center align-items-center h-100 m-0 p-0">
			<div className="d-flex justify-content-between">
				<div className="d-flex flex-column flex-grow-0 result-div p-3">
					<span>
						<i className="fas fa-plus"></i>
						<span className="title">Oyuncu:</span> {username}
					</span>
					<span>
						<i className="fas fa-plus"></i>
						<span className="title">Skor:</span> {gamme_linked_list.score}
					</span>

					<span>
						<i className="fas fa-plus"></i>
						<span className="title">Hamle Sayısı:</span>
						{gamme_linked_list.hamleNumber}
					</span>
					<span>
						<i className="fas fa-plus"></i>
						<span className="title">Zaman</span>: { }
					</span>

					<div className="records">
						<h6 style={{ color: "#FF597B" }}>
							Kullancıların Aldığı En Yüksek Skorlar
						</h6>
						{records.map((record) => {
							return (
								<div className="record-child">
									<p>
										<i
											className="fas fa-user"
											style={{ color: "#0081B4", paddingRight: "5px" }}
										></i>
										{record.username}
									</p>
									<p>Hareket Sayısı: {record.move}</p>
									<p>
										<i
											className="fas fa-star"
											style={{ color: "#FFEA20" }}
										></i>
										Skor: {record.score}
									</p>
								</div>
							);
						})}
					</div>
				</div>
				<div
					className="d-flex flex-wrap align-content-center justify-content-center align-items-start"
					style={{
						width: config.PUZZEL_TABLE_SIZE,
						height: config.PUZZEL_TABLE_SIZE,
					}}
				>
					{pzlBlks}

					{gamme_linked_list.isGameFinished() && (
						<>
							<button className="play-again-btn me-3" onClick={finish_the_game}>
								Bitir
							</button>
							<button className="play-again-btn" onClick={go_to_next_level}>
								Devam
							</button>
						</>
					)}
				</div>
				<div className="text-center">
					<img
						className="d-block"
						alt=""
						src={bg_image.value.croppedImage}
						style={{ objectFit: "contain", width: 150 }}
					/>
					<span>
						<span style={{ color: "#E7B10A" }}>Level:</span> {level} (
						{puzzel_blocks_per_row}x{puzzel_blocks_per_row})
					</span>
				</div>
			</div>
		</Row>
	);
};
export default GameScreen;
