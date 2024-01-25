import Link from "next/link";
import React, { useEffect, useState } from "react";
import cls from "./Header.module.scss";
import dynamic from "next/dynamic";
import UserIcon from "@/components/iconsCode/user-icon";
import { useUI } from "@/contexts/ui.context";
import { ROUTES } from "@/utils/routes";
import { useTranslation } from "react-i18next";
import { useModalAction } from "@/components/common/modal/modal.context";
import { useAppSelector } from "@/Store/store";
import { isAuthSelector, AuthNameSelector } from "@/Store/auth/auth.selector";
import { useGetUserDetailsMutation } from "@/Store/auth/auth.api";
const AuthMenu = dynamic(() => import("./AuthMenu"), { ssr: false });

function HeaderSignPhone() {
	const isAuthorized = useAppSelector(isAuthSelector);
	const authName = useAppSelector(AuthNameSelector);
	const [userDet, {}] = useGetUserDetailsMutation();
	const [{ data: prodata }, setState] = useState<any>({});
	const { t } = useTranslation("common");
	const { openModal } = useModalAction();
	const [mobPhone, setMobPhone] = React.useState<boolean>(false);
	function handleLogin() {
		openModal("LOGIN_VIEW");
	}


  const isLocalAuth = !!localStorage.getItem("refresh_token");
  console.log(!!localStorage.getItem("refresh_token"), 'sss')
  console.log(isAuthorized,'isAuthorized')

	useEffect(() => {
		const fetchData = async () => {
			authName;
			try {
				const id = authName; // Получить `UserId`
				if (id) {
					const response = await userDet({
						UserId: id,
					});
					setState(response as any);
				}
			} catch (error) {
				console.error("Ошибка при получении данных:", error);
			}
		};

		fetchData();
	}, [authName]);

	return (
		<>
			<div className={cls.header_sign_phone}>
				<div
					className="hidden lg:flex items-center flex-shrink-0 custom-dn"
					style={{
						display: "flex",
					}}>
					<AuthMenu
						isAuthorized={isLocalAuth}
						href={ROUTES.ACCOUNT}
						btnProps={{
							children: t("Войти"),
							onClick: handleLogin,
						}}>
						{prodata?.email}
					</AuthMenu>
					<UserIcon className="text-skin-base text-opacity-40" />
				</div>
			</div>
			<div className={cls.header_icon_phone}>
				<Link href="tel:+79037303001" className={cls.header_phone}>
					+7 (903) 730-30-01
				</Link>
				<Link
					href="tel:+79037981696"
					className={`${cls.header_phone} ${cls.header_phone_dn} ${
						mobPhone ? cls.header_phone_mob : ""
					}`}>
					+7 (903) 730-30-01
				</Link>
				<button
					onClick={() => setMobPhone(!mobPhone)}
					className={`${cls.header_icons__icon} ${cls.header_icons__icon_dn}`}>
					<svg className={cls.ui_icon} viewBox="0 0 512 512">
						<path d="M485.221,386.694l-18.917-12.603c42.662-75.036,42.186-167.102-1.251-241.692S341.781,11.956,255.464,12.027c-4.482,0-8.115,3.633-8.115,8.115s3.633,8.115,8.115,8.115c80.322-0.06,154.645,42.502,195.245,111.809c40.599,69.306,41.376,154.951,2.043,224.984l-66.133-44.092c-12.51-8.271-29.275-5.548-38.524,6.257l-28.68,36.917c-3.693,4.863-10.397,6.273-15.736,3.311l-5.462-3.011c-18.106-9.869-40.634-22.155-86.024-67.561s-57.701-67.951-67.57-86.024l-2.995-5.462c-3.006-5.337-1.622-12.073,3.246-15.793l36.892-28.704c11.804-9.249,14.531-26.012,6.265-38.524l-65.735-98.571c-8.472-12.741-25.467-16.566-38.58-8.683l-41.219,24.76C29.547,47.485,20.045,59.816,15.985,74.28c-14.843,54.081-3.677,147.417,133.816,284.926c59.892,59.892,111.385,95.762,154.924,116.051c-67.013,15.141-137.275-1.066-190.885-44.03c-53.611-42.965-84.733-108.009-84.553-176.71c0-4.482-3.633-8.115-8.115-8.115s-8.115,3.633-8.115,8.115c0.126,133.841,108.569,242.32,242.409,242.49c25.074,0.009,49.995-3.918,73.85-11.638c21.523,8.039,44.271,12.305,67.245,12.612c12.88,0.055,25.709-1.621,38.143-4.982c14.467-4.055,26.8-13.558,34.409-26.513l24.785-41.194C501.792,412.175,497.969,395.17,485.221,386.694z M479.946,416.94l-24.728,41.219c-5.467,9.367-14.35,16.251-24.785,19.209c-23.607,6.493-55.583,7.304-96.671-7.507c-0.651-0.365-1.351-0.638-2.078-0.811c-45.447-16.872-101.874-52.832-170.425-121.358C29.302,215.742,17.933,128.508,31.64,78.574c2.963-10.431,9.847-19.313,19.209-24.785l41.219-24.728c5.69-3.424,13.066-1.764,16.742,3.765l35.708,53.611l29.971,44.951c3.589,5.428,2.41,12.702-2.71,16.718l-36.901,28.704c-11.23,8.587-14.437,24.124-7.523,36.455l2.93,5.324c10.372,19.023,23.267,42.687,70.345,89.757c47.078,47.069,70.735,59.965,89.749,70.336l5.331,2.938c12.33,6.913,27.868,3.707,36.455-7.523l28.704-36.901c4.017-5.117,11.289-6.296,16.718-2.71l98.562,65.735C481.679,403.884,483.352,411.248,479.946,416.94z"></path>
					</svg>
				</button>
				<Link
					href="tel:+79037981696"
					className={`${cls.header_icons__icon} ${cls.header_icons__icon_db}`}>
					<svg className={cls.ui_icon} viewBox="0 0 512 512">
						<path d="M485.221,386.694l-18.917-12.603c42.662-75.036,42.186-167.102-1.251-241.692S341.781,11.956,255.464,12.027c-4.482,0-8.115,3.633-8.115,8.115s3.633,8.115,8.115,8.115c80.322-0.06,154.645,42.502,195.245,111.809c40.599,69.306,41.376,154.951,2.043,224.984l-66.133-44.092c-12.51-8.271-29.275-5.548-38.524,6.257l-28.68,36.917c-3.693,4.863-10.397,6.273-15.736,3.311l-5.462-3.011c-18.106-9.869-40.634-22.155-86.024-67.561s-57.701-67.951-67.57-86.024l-2.995-5.462c-3.006-5.337-1.622-12.073,3.246-15.793l36.892-28.704c11.804-9.249,14.531-26.012,6.265-38.524l-65.735-98.571c-8.472-12.741-25.467-16.566-38.58-8.683l-41.219,24.76C29.547,47.485,20.045,59.816,15.985,74.28c-14.843,54.081-3.677,147.417,133.816,284.926c59.892,59.892,111.385,95.762,154.924,116.051c-67.013,15.141-137.275-1.066-190.885-44.03c-53.611-42.965-84.733-108.009-84.553-176.71c0-4.482-3.633-8.115-8.115-8.115s-8.115,3.633-8.115,8.115c0.126,133.841,108.569,242.32,242.409,242.49c25.074,0.009,49.995-3.918,73.85-11.638c21.523,8.039,44.271,12.305,67.245,12.612c12.88,0.055,25.709-1.621,38.143-4.982c14.467-4.055,26.8-13.558,34.409-26.513l24.785-41.194C501.792,412.175,497.969,395.17,485.221,386.694z M479.946,416.94l-24.728,41.219c-5.467,9.367-14.35,16.251-24.785,19.209c-23.607,6.493-55.583,7.304-96.671-7.507c-0.651-0.365-1.351-0.638-2.078-0.811c-45.447-16.872-101.874-52.832-170.425-121.358C29.302,215.742,17.933,128.508,31.64,78.574c2.963-10.431,9.847-19.313,19.209-24.785l41.219-24.728c5.69-3.424,13.066-1.764,16.742,3.765l35.708,53.611l29.971,44.951c3.589,5.428,2.41,12.702-2.71,16.718l-36.901,28.704c-11.23,8.587-14.437,24.124-7.523,36.455l2.93,5.324c10.372,19.023,23.267,42.687,70.345,89.757c47.078,47.069,70.735,59.965,89.749,70.336l5.331,2.938c12.33,6.913,27.868,3.707,36.455-7.523l28.704-36.901c4.017-5.117,11.289-6.296,16.718-2.71l98.562,65.735C481.679,403.884,483.352,411.248,479.946,416.94z"></path>
					</svg>
				</Link>
				{/* <div style={{zIndex: 1000}} onClick={timeoutId}>sewretgf</div> */}
			</div>
		</>
	);
}

export default HeaderSignPhone;
