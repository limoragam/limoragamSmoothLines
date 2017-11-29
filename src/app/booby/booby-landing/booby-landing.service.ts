declare var mina:any;

import { Injectable } from '@angular/core';
import { AnimationFrame } from '../animation-frame.model';
import { AttributesService } from '../attributes.service';

@Injectable()
export class BoobyLandingService {
  attrBody = this.attributesService.attrBody;
  attrWing = this.attributesService.attrWing;
  attrEye = this.attributesService.attrEye;
  attrBeak = this.attributesService.attrBeak;
  attrEyebrow = this.attributesService.attrEyebrow;
  
  pathsBody = [
    "M13.263 42.67c-1.033 2.905.444 3.863.412 6.159 0 0-4.732 1.268-9.113 5.816C.499 58.863.705 65.111.657 67.503c-.055 2.682.04 4.666 1.87 7.675 1.763 2.9 4.444 5.866 16.105 5.796 11.094-.067 15.948-1.7 17.546-3.522 2.308-2.633 3.655-6.873 3.33-14.663-.16-3.839-2.428-6.217-3.831-7.428-2.937-2.532-10.06-6.357-10.06-6.357s.683-1.596.897-2.739c.256-1.372.388-4.171-1.259-5.117-2.125-1.22-2.98-1.275-5.8-1.381-3.1-.118-5.224 1.04-6.192 2.902z",
    "M11.604 23.705c-1.09 3.951.975 6.894 1.863 10.737.814 3.527-.626 7.067-1.707 9.135C7.917 50.926 1.874 58.275.863 64.844c-.406 2.641 1.342 7.903 2.32 9.646 1.798 3.202 6.581 6.753 15.175 6.436 11.914-.439 17.353-1.732 19.669-7.268 1.14-2.724 2.544-6.708 1.161-11.432-2.415-8.25-8.084-11.96-12.363-18.68-1.538-2.415-3.145-6.489-3.41-9.867-.196-2.488 1.166-4.97.954-7.455-.138-1.623-.49-3.984-2.059-5.143-2.29-1.693-4.8-1.317-6.628-1.102-1.324.155-3.362 1.13-4.078 3.726z",
    "M13.212 5.418c-.433 4.383 1.015 8.09 1.948 12.083 1.061 4.539 1.825 12.18.703 15.402-2.85 8.19-8.403 15.864-11.85 23.512C3.068 58.51-.42 64.796 1.47 70.32c1.89 5.525 5.525 10.751 17.164 10.613 11.073-.13 16.863-2.498 18.41-6.153 1.599-3.78 4.453-10.563-.826-19.07-4.554-7.34-10.349-15.558-11.957-22.523-1.192-5.167-.391-11.113 0-15.848.264-3.191 1.491-6.692 1.6-8.142.133-1.787.957-4.471-.616-6.386C22.445-.853 17.978.11 17.12.351c-2.506.705-3.72 3.164-3.908 5.067",
  ];

  pathsRightWing = [
    "M13.723 48.617s-4.173.556-7.928 3.848C2.318 55.512.661 59.338.325 63.59c-.371 4.683.788 11.961.788 11.961.728-1.878 5.13-4.791 7.603-8.67 2.505-3.927 5.154-9.784 5.98-13.166.662-2.705-.81-5.181-.973-5.1z",
    "M12.948 40.741s-3.657 4.547-5.88 7.809C4.842 51.812 1.811 56.334.79 60.955-.247 65.65.313 72.223.79 72.223c.203.508 4.91-4.798 7.215-8.352 3.506-5.406 4.514-9.45 5.536-12.949 1.145-3.923.928-8.744-.594-10.18z",
    "M15.866 31.935s-.987 2.826-2.417 5.233C12.01 39.588 2.9 55.335 1.957 58.005 1.031 60.625-.51 67.426.14 70.655c.077.154 5.194-6.337 7.968-10.553 2.101-3.195 4.987-9.599 6.919-16.355 1.249-4.367 2.12-9.453.839-11.812z",
  ];

  pathsLeftWing = [
    "M25.243 48.624s5.985 2.172 9.312 4.355c5.104 3.348 5.664 8.82 5.35 13.375-.315 4.575-.75 9.633-.75 9.633-1.344-1.999-3.524-6.47-5.978-8.998-4.27-4.398-5.816-5.808-6.285-11.182-.438-5.026-1.526-7.137-1.649-7.183z",
    "M25.11 40.306s4.796 5.2 7.078 7.527c2.262 2.307 7.203 8.253 7.604 13.671.401 5.418-.863 11.64-.863 11.64-1.409-1.715-3.573-5.708-5.458-8.295-3.322-4.558-6.459-8.385-6.789-13.927-.32-5.377-1.573-10.616-1.573-10.616z",
    "M23.96 31.892s1.645 1.507 3.37 4.495c1.726 2.987 11.071 18.603 12.1 22.71 1.144 4.566.205 9.55-.398 12.28-1.263-1.932-3.089-5.61-6.373-9.956-3.201-4.237-5.841-10.488-6.837-18.122-.996-7.634-1.862-11.407-1.862-11.407z",
  ];

  pathsRightEye = [
    "M16.82 43.911c-.721-.552-1.21-.721-1.74-.424-.531.297-.744 1.04-.701 1.974.042.934.233 1.974.955 1.974s1.496-.62 1.614-.912c.127-.319.382-1.19.318-1.487-.064-.297.029-.762-.446-1.125z",
    "M13.002 24.252c-.653.487-.797 1.392-.7 1.974.15.914.246 1.956.955 1.975.722.019 1.537-.607 1.613-.913.12-.479.225-1.013.319-1.486.085-.43-.292-1.023-.446-1.125-.618-.365-1.288-.74-1.74-.425z",
    "M16.698 5.442c-.721-.552-1.21-.722-1.74-.425-.531.297-.743 1.04-.701 1.975.042.934.233 1.974.955 1.974s1.497-.62 1.614-.913c.127-.318.382-1.189.318-1.486-.064-.297.029-.762-.446-1.125z",
    "M16.698 7.543a27.3 27.3 0 0 0-1.74-.02c-.531.014-.743.048-.701.09.042.044.233.091.955.091s1.497-.028 1.614-.042c.127-.014.382-.054.318-.068-.064-.013.029-.035-.446-.051z"
  ];
  
  pathsRightPupil = [
    "M15.95 45.695c.403-.34.488-.467.658-.043.17.425.36.595.191.828-.17.234-.446.637-.658.467-.212-.17-.552-.85-.191-1.252z",
    "M14.628 26.563c.09.35.234.475.094.682-.16.383-.44.618-.658.467-.477-.173-.471-.908-.191-1.252.403-.34.585-.321.755.103z",
    "M16.486 7.183c.254.38.361.594.191.828-.17.233-.446.636-.658.467-.212-.17-.552-.85-.17-1.221.382-.372.467-.329.637-.074z",
    "M15.828 7.625c.403-.016.488-.014.658-.002.254.017.361.027.191.038-.17.01-.446.029-.658.02-.212-.007-.552-.038-.191-.056z"
  ];
  
  pathsLeftEye = [
    "M22.68 43.508c.19-.361.488-.637 1.019-.7.53-.064 1.21-.022 1.422.424.212.446.403 1.295.127 2.144-.276.85-.615 1.731-1.146 1.741-1.286.024-1.438-1.081-1.55-1.847-.098-.676-.028-1.468.128-1.762z",
    "M21.621 23.573c.531-.064 1.21-.021 1.423.424.212.446.403 1.295.127 2.144-.276.85-.615 1.731-1.146 1.741-1.286.024-1.438-1.08-1.55-1.847-.098-.677-.028-1.467.127-1.762.191-.361.489-.637 1.02-.7z",
    "M22.558 5.038c.19-.361.488-.636 1.019-.7.53-.064 1.21-.021 1.422.425.212.445.403 1.295.127 2.144-.275.849-.615 1.73-1.146 1.74-1.286.025-1.438-1.08-1.55-1.846-.098-.677-.028-1.468.128-1.763z",
    "M22.558 7.484a10.56 10.56 0 0 1 1.019-.041c.53-.004 1.21-.001 1.422.025.212.026.403.075.127.124-.276.05-.615.1-1.146.101-1.286.002-1.438-.063-1.55-.107-.098-.04-.028-.085.128-.102z",
  ];
  
  pathsLeftPupil = [
    "M23.02 45.673c.318-.382.318-.403.573-.148.254.255.403.68.233.891-.17.213-.34.404-.594.319-.255-.085-.234-.828-.213-1.062z",
    "M21.515 26.29c.255.255.404.68.234.892-.17.212-.34.403-.595.318-.254-.086-.233-.828-.212-1.061.318-.382.318-.404.573-.149z",
    "M22.897 7.204c.319-.382.319-.403.574-.149.254.255.403.68.233.892-.17.212-.34.403-.594.318-.255-.085-.234-.828-.213-1.061z",
    "M22.897 7.61c.319-.023.319-.024.574-.01.254.016.403.04.233.053-.17.012-.34.023-.594.018-.255-.005-.234-.048-.213-.062z",
  ];
  
  pathsBeak = [
    "M16.984 44.412s1.646.292 2.862.182c1.216-.109 2.709-1.236 2.709-1.236s-1.85 5.46-2.423 8.044c-.457 2.067-1.43 7.535-1.43 7.535s-.554-6.363-.93-8.373c-.417-2.217-.788-6.152-.788-6.152z",
    "M15.13 24.545s1.644.431 2.859.27c1.215-.162 2.64-1.047 2.64-1.047s-1.782 7.3-2.354 11.127c-.457 3.06-1.43 11.158-1.43 11.158s-.552-9.423-.929-12.398c-.416-3.284-.786-9.11-.786-9.11",
    "M17.088 5.48s1.643.572 2.857.357c1.213-.214 2.57-.856 2.57-.856s-1.714 9.14-2.285 14.21c-.457 4.054-1.428 14.781-1.428 14.781s-.552-12.482-.928-16.424c-.416-4.35-.786-12.068-.786-12.068z",
  ];
  
  pathsEyebrow = [
    "M14.749 42.75s2.707 1.886 4.867 1.694c2.16-.191 4.976-2.242 4.976-2.242",
    "M12.672 23.514s2.763 1.118 4.923.926c2.16-.191 4.92-1.472 4.92-1.472",
    "M14.627 4.28s2.707 1.886 4.867 1.695c2.16-.192 4.976-2.242 4.976-2.242",
  ];

  private svgId = "#boobyLanding";
  private pathBodyId = "#body";
  private pathRightWingId = "#rightWing";
  private pathLeftWingId = "#leftWing";
  private pathRightEyeId = "#rightEye";
  private pathRightPupilId = "#rightPupil";
  private pathLeftEyeId = "#leftEye";
  private pathLeftPupilId = "#leftPupil";
  private pathBeakId = "#beak";
  private pathEyebrowId = "#eyebrow";
  
  framesBody:AnimationFrame[] = [
    new AnimationFrame(this.svgId, this.pathBodyId, {d: this.pathsBody[0]}, 900, mina.easeinout),
    new AnimationFrame(this.svgId, this.pathBodyId, {d: this.pathsBody[1]}, 1000, mina.easeinout),
    new AnimationFrame(this.svgId, this.pathBodyId, {d: this.pathsBody[2]}, 1000, mina.easeinout),
  ];

  framesRightWing:AnimationFrame[] = [
    new AnimationFrame(this.svgId, this.pathRightWingId, {d: this.pathsRightWing[0]}, 900, mina.easeinout),
    new AnimationFrame(this.svgId, this.pathRightWingId, {d: this.pathsRightWing[1]}, 1000, mina.easeinout),
    new AnimationFrame(this.svgId, this.pathRightWingId, {d: this.pathsRightWing[2]}, 1000, mina.easeinout),
  ];

  framesLeftWing:AnimationFrame[] = [
    new AnimationFrame(this.svgId, this.pathLeftWingId, {d: this.pathsLeftWing[0]}, 900, mina.easeinout),
    new AnimationFrame(this.svgId, this.pathLeftWingId, {d: this.pathsLeftWing[1]}, 1000, mina.easeinout),
    new AnimationFrame(this.svgId, this.pathLeftWingId, {d: this.pathsLeftWing[2]}, 1000, mina.easeinout),
  ];

  framesRightEye:AnimationFrame[] = [
    new AnimationFrame(this.svgId, this.pathRightEyeId, {d: this.pathsRightEye[0]}, 900, mina.easeinout),
    new AnimationFrame(this.svgId, this.pathRightEyeId, {d: this.pathsRightEye[1]}, 1000, mina.easeinout),
    new AnimationFrame(this.svgId, this.pathRightEyeId, {d: this.pathsRightEye[2]}, 1000, mina.easeinout),
    new AnimationFrame(this.svgId, this.pathRightEyeId, {d: this.pathsRightEye[3]}, 200, mina.easeinout),
    new AnimationFrame(this.svgId, this.pathRightEyeId, {d: this.pathsRightEye[2]}, 100, mina.easeinout),
  ];

  framesRightPupil:AnimationFrame[] = [
    new AnimationFrame(this.svgId, this.pathRightPupilId, {d: this.pathsRightPupil[0]}, 900, mina.easeinout),
    new AnimationFrame(this.svgId, this.pathRightPupilId, {d: this.pathsRightPupil[1]}, 1000, mina.easeinout),
    new AnimationFrame(this.svgId, this.pathRightPupilId, {d: this.pathsRightPupil[2]}, 1000, mina.easeinout),
    new AnimationFrame(this.svgId, this.pathRightPupilId, {d: this.pathsRightPupil[3]}, 200, mina.easeinout),
    new AnimationFrame(this.svgId, this.pathRightPupilId, {d: this.pathsRightPupil[2]}, 100, mina.easeinout),
  ];

  framesLeftEye:AnimationFrame[] = [
    new AnimationFrame(this.svgId, this.pathLeftEyeId, {d: this.pathsLeftEye[0]}, 900, mina.easeinout),
    new AnimationFrame(this.svgId, this.pathLeftEyeId, {d: this.pathsLeftEye[1]}, 1000, mina.easeinout),
    new AnimationFrame(this.svgId, this.pathLeftEyeId, {d: this.pathsLeftEye[2]}, 1000, mina.easeinout),
    new AnimationFrame(this.svgId, this.pathLeftEyeId, {d: this.pathsLeftEye[3]}, 200, mina.easeinout),
    new AnimationFrame(this.svgId, this.pathLeftEyeId, {d: this.pathsLeftEye[2]}, 100, mina.easeinout),
  ];

  framesLeftPupil:AnimationFrame[] = [
    new AnimationFrame(this.svgId, this.pathLeftPupilId, {d: this.pathsLeftPupil[0]}, 900, mina.easeinout),
    new AnimationFrame(this.svgId, this.pathLeftPupilId, {d: this.pathsLeftPupil[1]}, 1000, mina.easeinout),
    new AnimationFrame(this.svgId, this.pathLeftPupilId, {d: this.pathsLeftPupil[2]}, 1000, mina.easeinout),
    new AnimationFrame(this.svgId, this.pathLeftPupilId, {d: this.pathsLeftPupil[3]}, 200, mina.easeinout),
    new AnimationFrame(this.svgId, this.pathLeftPupilId, {d: this.pathsLeftPupil[2]}, 100, mina.easeinout),
  ];

  framesBeak:AnimationFrame[] = [
    new AnimationFrame(this.svgId, this.pathBeakId, {d: this.pathsBeak[0]}, 900, mina.easeinout),
    new AnimationFrame(this.svgId, this.pathBeakId, {d: this.pathsBeak[1]}, 1000, mina.easeinout),
    new AnimationFrame(this.svgId, this.pathBeakId, {d: this.pathsBeak[2]}, 1000, mina.easeinout),
  ];

  framesEyebrow:AnimationFrame[] = [
    new AnimationFrame(this.svgId, this.pathEyebrowId, {d: this.pathsEyebrow[0]}, 900, mina.easeinout),
    new AnimationFrame(this.svgId, this.pathEyebrowId, {d: this.pathsEyebrow[1]}, 1000, mina.easeinout),
    new AnimationFrame(this.svgId, this.pathEyebrowId, {d: this.pathsEyebrow[2]}, 1000, mina.easeinout),
  ];

  constructor(private attributesService:AttributesService) {}
}
