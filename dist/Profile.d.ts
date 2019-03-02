/**
 * ArToolkitProfile helps you build parameters for artoolkit
 * - it is fully independent of the rest of the code
 * - all the other classes are still expecting normal parameters
 * - you can use this class to understand how to tune your specific usecase
 * - it is made to help people to build parameters without understanding all the underlying details.
 */
export declare class Profile {
	private sourceParameters;
	private contextParameters;
	private defaultMarkerParameters;
	private parameters;
	constructor(parameters: any);
	/**
	 * reset all parameters
	 */
	reset(baseURL: string): this;
	performance(label: string): this;
	defaultMarker(): this;
	sourceWebcam(): this;
	sourceVideo(url: string): this;
	sourceImage(url: string): this;
	changeMatrixMode(changeMatrixMode: any): this;
	private _guessPerformanceLabel;
}
export default Profile;