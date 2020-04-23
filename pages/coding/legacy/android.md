---
layout: page
title: Android
subtitle:
---

## AndroidManifest.xml

### Screen orientation

```
<application
    <activity
        android:screenOrientation="portrait">
    </activity>
</application>
```

## Layout XML

### Disable Power save mode

```
<LinearLayout
    android:keepScreenOn="true">
</LinearLayout>
```

### Use customized font

* Download wanted font in otf-format
* Copy font to `assets/fonts` folder
* Set font in use:
  ```
  final Typeface tf = Typeface.createFromAsset(context.getAssets(), "fonts/Earth 1.0.0.40.otf");
  final TextView foodPointText = (TextView)this.rootView.findViewById(R.id.etusivu_ruokapiste_teksti);
  final TextView sportPointText = (TextView)this.rootView.findViewById(R.id.etusivu_liikuntapiste_teksti);
  foodPointText.setTypeface(tf);
  sportPointText.setTypeface(tf);
  ```

## Widget size

| Rows or cols  | Size (dp) |
|---------------|-----------|
| 1 | 40 |
| 2 | 110 |
| 3 | 180 |
| 4 | 250 |
| ... | ... |
| n | 70 x n - 30 |