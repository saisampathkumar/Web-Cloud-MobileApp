package com.example.vijaya.myorder;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.View;
import android.widget.CheckBox;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.example.vijaya.myorder.MainActivity;

public class SummaryActivity extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.summary);
        String summary = getIntent().getStringExtra("summary");
        TextView summaryText = (TextView) findViewById(R.id.summary);
        summaryText.setText(summary);
    }
    public void goBack(View view) {
        Intent redirect = new Intent(SummaryActivity.this, MainActivity.class);
        //redirect.putExtra("summary", orderSummaryMessage);
        startActivity(redirect);
    }

}
